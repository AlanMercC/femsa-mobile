package com.batterylevelapp

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.content.IntentFilter
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Callback

class BatteryLevelManagerModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    init {
        val filter = IntentFilter(Intent.ACTION_BATTERY_CHANGED)
        reactContext.registerReceiver(batteryReceiver, filter)
    }

    override fun getName(): String {
        return "BatteryLevelManager"
    }

    @ReactMethod
    fun getBatteryLevel(callback: Callback) {
        val batteryStatus: Intent = context.registerReceiver(null, IntentFilter(Intent.ACTION_BATTERY_CHANGED))
        val level: Int = batteryStatus.getIntExtra(android.os.BatteryManager.EXTRA_LEVEL, -1)
        callback.invoke(level)
    }

    @ReactMethod
    fun startMonitoringBatteryLevel() {
        // Registramos el receptor para recibir cambios de batería
    }

    @ReactMethod
    fun stopMonitoringBatteryLevel() {
        context.unregisterReceiver(batteryReceiver)
    }

    private val batteryReceiver: BroadcastReceiver = object : BroadcastReceiver() {
        override fun onReceive(context: Context?, intent: Intent?) {
            val level: Int = intent!!.getIntExtra(android.os.BatteryManager.EXTRA_LEVEL, -1)
            // Emitir evento a JS
        }
    }
}