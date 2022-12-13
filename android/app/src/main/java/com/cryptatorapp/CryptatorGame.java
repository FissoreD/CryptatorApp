package com.cryptatorapp;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.ByteArrayOutputStream;
import java.io.IOException;

import cryptator.CryptaJson;
import cryptator.CryptaOperator;
import cryptator.config.CryptaConfig;
import cryptator.config.CryptatorConfig;
import cryptator.game.CryptaGameDecision;
import cryptator.game.CryptaGameEngine;
import cryptator.game.CryptaGameException;
import cryptator.json.SolveInput;
import cryptator.json.SolveOutput;
import cryptator.parser.CryptaParserWrapper;
import cryptator.solver.CryptaModel;
import cryptator.solver.CryptaModelException;
import cryptator.solver.CryptaModeler;
import cryptator.solver.CryptaSolverException;
import cryptator.specs.ICryptaNode;


public class CryptatorGame extends ReactContextBaseJavaModule {

    private final CryptaParserWrapper parser = new CryptaParserWrapper();
    private final CryptaModeler modeler = new CryptaModeler();
    private final CryptaGameEngine engine = new CryptaGameEngine();
    private final ObjectMapper mapper = new ObjectMapper();
    private final CryptaConfig config = new CryptaConfig();

    CryptatorGame(ReactApplicationContext context) {
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return "CryptatorGame";
    }

    // Create the engine and play with it
    @ReactMethod
    public void setEngine(final String cryptarithm) throws CryptaModelException, CryptaGameException {
        final ICryptaNode node = parser.parse(cryptarithm);
        final CryptaModel model = modeler.model(node, config);
        engine.setUp(model);
    }

    @ReactMethod
    public void takeDecision(final String symbol, final String reOperator, final int value, Promise p)
            throws CryptaGameException {
        p.resolve(engine.takeDecision(new CryptaGameDecision(symbol.charAt(0), CryptaOperator.valueOfToken(reOperator), value)));
    }

    @ReactMethod
    public void isSolved(Promise getSolutions) {
        getSolutions.resolve(engine.isSolved());
    }

    // Send the solutions to the user
    private void buildJsonInput(final Object object, StringBuffer res) throws IOException {
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        mapper.writeValue(out, object);
        res.append(out);
        res.append('\n');
    }

    private void solve(final String cryptarithm, StringBuffer res)
            throws IOException, CryptaModelException, CryptaSolverException {
        SolveInput input = new SolveInput(cryptarithm, new CryptatorConfig());
        final SolveOutput output = CryptaJson.solve(input);
        buildJsonInput(output, res);
    }

    @ReactMethod
    public void getSolutions(String cryptarithm, Promise getSolutions) {
        StringBuffer res = new StringBuffer();
        try {
            solve(cryptarithm, res);
            getSolutions.resolve(res.toString());
        } catch (IOException | CryptaModelException | CryptaSolverException e) {
            getSolutions.reject(e);
        }
    }
}

