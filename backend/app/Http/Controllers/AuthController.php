<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    /**
     * Show login form (Web)
     */
    public function showLoginForm()
    {
        return view('auth.login');
    }

    /**
     * Handle Login (Web & API)
     */
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (Auth::attempt($credentials)) {
            $user = Auth::user();

            if ($request->wantsJson() || $request->is('api/*')) {
                $token = $user->createToken('api-token')->plainTextToken;
                return response()->json(['token' => $token, 'user' => $user]);
            }

            $request->session()->regenerate();
            return redirect()->intended('/admin');
        }

        if ($request->wantsJson() || $request->is('api/*')) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        return back()->withErrors(['email' => 'Invalid credentials'])->onlyInput('email');
    }

    /**
     * Handle Logout (Web & API)
     */
    public function logout(Request $request)
    {
        // 1. Revoke API tokens if applicable
        if ($request->user()) {
            $request->user()->tokens()->delete();
        }

        // 2. Invalidate Web Session
        Auth::guard('web')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        if ($request->wantsJson() || $request->is('api/*')) {
            return response()->json(['message' => 'Logged out']);
        }

        return redirect('/login');
    }
}
