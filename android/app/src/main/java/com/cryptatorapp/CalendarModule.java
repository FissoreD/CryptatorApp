package com.cryptatorapp;

import static cryptator.tree.TreeUtils.writeInorder;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.io.ByteArrayOutputStream;
import java.math.BigInteger;
import java.text.SimpleDateFormat;
import java.util.Map;
import java.util.HashMap;

import android.annotation.SuppressLint;
import android.util.*;
import android.util.Log;

import cryptator.CryptaOperator;
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
import cryptator.tree.CryptaLeaf;
import cryptator.tree.CryptaNode;


public class CalendarModule extends ReactContextBaseJavaModule {
    CalendarModule(ReactApplicationContext context) {
        super(context);
        Log.d("Ciao", "ciao");
    }

    @Override
    public String getName() {
        return "CalendarModule";
    }

    @ReactMethod
    public void createCalendarEvent(String name, String location) {
        Log.d("CalendarModule", "Create event called with name: " + name
                + " and location: " + location);
    }

    @ReactMethod
    public void getTime(Callback giveTime) {
        @SuppressLint("SimpleDateFormat") SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.SSS");
        //giveTime.invoke("Ciao davide");
        ICryptaNode sendMoreMoney = new CryptaNode(CryptaOperator.EQ,
                new CryptaNode(CryptaOperator.ADD, new CryptaLeaf("send"), new CryptaLeaf("more")),
                new CryptaLeaf("money"));

        //ICryptaParser p = new CryptaParserWrapper();
        //p.parse("A + B = C");
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
        giveTime.invoke(os.toString());
    }
}

