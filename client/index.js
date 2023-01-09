import React from "react";

const someFunc = () => {
    console.log("some")
    return (
        someFunc()
    )
}

export default someFunc