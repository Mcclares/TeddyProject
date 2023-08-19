import React from "react";

interface Greeting {
    firstName: string;
    messageCount: number;
    isLoggedIn: boolean;
}


export const Greet = (props: Greeting) => {
    return (
        <div>
            <h2>
                    {
                      props.isLoggedIn ? `Welcome ${props.firstName} You have ${props.messageCount} unread messages!` : "Welcome Guest!"
                    };
            </h2>

        </div>

    )
};
export default Greet;