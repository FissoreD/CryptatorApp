package com.cryptatorapp;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.ByteArrayOutputStream;
import java.io.IOException;

import cryptator.CryptaJson;
import cryptator.config.CryptatorConfig;
import cryptator.json.SolveInput;
import cryptator.json.SolveOutput;
import cryptator.solver.CryptaModelException;
import cryptator.solver.CryptaSolverException;


public class CryptatorModule extends ReactContextBaseJavaModule {
    private final CryptatorConfig config = new CryptatorConfig();
    private final ObjectMapper mapper = new ObjectMapper();

    CryptatorModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "CryptatorModule";
    }

    private void buildJsonInput(final Object object, StringBuffer res) throws IOException {
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        mapper.writeValue(out, object);
        res.append(out);
        res.append('\n');
    }

    public void solve(final String cryptarithm, StringBuffer res)
            throws IOException, CryptaModelException, CryptaSolverException {
        SolveInput input = new SolveInput(cryptarithm, config);
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

