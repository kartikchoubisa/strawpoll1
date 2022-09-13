import React, { useState, useEffect } from "react"
import "./Nav.css"
import UAuth from "@uauth/js"

const uauth = new UAuth({
    clientID: "70012f58-4bea-4028-b4f8-74b80a1f1283",
    redirectUri: "http://localhost:3000",
    scope: "openid wallet"
  })

function Nav() {
    const [userWallet, setUserWallet] = useState(null)
    //useEffect model
    useEffect(() => {
        // setUserWallet("Login With Unstoppable")
        uauth
            .user()
            .then((user) => {
                setUserWallet(user.sub)
                // user exists
                console.log("User information:", user)
            })
            .catch((err) => {
                console.log(err)
                // user does not exist
            })
    }, [])
    const login = async () => {
        try {
            const authorization = await uauth.loginWithPopup()
            uauth.user().then((user) => {
                setUserWallet(user.sub)
                // user exist
                console.log("User information:", user)
            })
            console.log(authorization)
        } catch (err) {
            console.error(err)
        }
    }

    const logout = async () => {
        try {
            await uauth.logout()
            setUserWallet(null)
        } catch (err) {
            console.error(err)
        }
    }
    return (
        <div className="navContainer">
            <div className="logo">Straw Poll</div>
            {userWallet ? (
                <div className="signed_in">
                    <div className="signed_in_wallet">
                        <div className="wallet_address">{userWallet}</div>
                    </div>
                </div>
            ) : (
                <button className="connectButton" onClick={login}>
                    Login with Unstoppable
                </button>
            )}
        </div>
    )
}

export default Nav
