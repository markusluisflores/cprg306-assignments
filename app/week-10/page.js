"use client"

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function SignInPage() {

    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    async function handleSignIn() {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.log(error);
        }
    }

    async function handleSignOut() {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <main>
            <header>
                <h1 className="font-bold text-3xl my-10">Shopping List App</h1>
            </header>
            {user ? (
                <div>
                    <p>Signed in as {user.displayName} ({user.email})</p>
                    <div>
                        <Link href="/week-10/shopping-list/">Continue to your Shopping List</Link>
                    </div>
                    <button
                        type="button"
                        onClick={handleSignOut}
                        className="text-lg bg-green-600 text-white rounded px-2 py-1 mt-4"
                    >
                        Sign Out
                    </button>
                </div>
            ) : (
                <div>
                    <button
                        type="button"
                        onClick={handleSignIn}
                        className="text-lg bg-green-600 text-white rounded px-2 py-1 mt-4"
                    >
                        Sign In with GitHub
                    </button>
                </div>
            )}
        </main>
    );
}
