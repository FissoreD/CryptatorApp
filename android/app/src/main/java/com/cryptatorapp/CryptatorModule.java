package com.cryptatorapp;

import static cryptator.tree.TreeUtils.writeInorder;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.io.ByteArrayOutputStream;

import android.util.Log;

import cryptator.config.CryptaConfig;
import cryptator.parser.CryptaParserWrapper;
import cryptator.solver.CryptaModelException;
import cryptator.solver.CryptaSolver;
import cryptator.solver.CryptaSolverException;
import cryptator.specs.ICryptaEvaluation;
import cryptator.specs.ICryptaNode;
import cryptator.specs.ICryptaParser;
import cryptator.specs.ICryptaSolver;
import cryptator.tree.CryptaEvaluation;
import cryptator.tree.CryptaEvaluationException;


public class CryptatorModule extends ReactContextBaseJavaModule {
    CryptatorModule(ReactApplicationContext context) {
        super(context);
        Log.d("Ciao", "ciao");
    }

    @Override
    public String getName() {
        return "CryptatorModule";
    }

    @ReactMethod
    public void createCryptator() {

    }

    @ReactMethod
    public void getSolutions(Callback getSolutions) {

        ICryptaParser p = new CryptaParserWrapper();
        ICryptaNode sendMoreMoney = p.parse("A + B = C");
        ICryptaSolver i = new CryptaSolver();
        ICryptaEvaluation eval = new CryptaEvaluation();
        CryptaConfig config = new CryptaConfig();

        try {
            i.solve(sendMoreMoney, config,  (s) -> {
                //System.out.println(s);
                try {
                    eval.evaluate(sendMoreMoney, s, config.getArithmeticBase());
                } catch (CryptaEvaluationException e) {
                    e.printStackTrace();
                }});
        } catch (CryptaModelException | CryptaSolverException e) {
            e.printStackTrace();
        }

        final ByteArrayOutputStream os = new ByteArrayOutputStream();
        writeInorder(sendMoreMoney, os);
        getSolutions.invoke(os.toString());
    }
}

