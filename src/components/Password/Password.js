import React from 'react';
import '../Password/Password.css';

function Password({ password }) {
    return(
        <>
            <label className="passwordLabel">Generated password:</label>
            <textarea
                className="generatedPassword"
                value={password}
                readOnly
                rows={8} // You can adjust the number of rows as needed
                cols={40} // You can adjust the number of columns as needed
            />
        </>
    );
}

export default Password;
