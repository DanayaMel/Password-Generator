import React, { useState, useEffect } from 'react';
import generatePassword from '../../utils/passwordHelper';

function PasswordGeneratorOptions({ updatePassword, password }) {
    const defaultOptions = {
        type: 'Random',
        include_numbers: true,
        include_symbols: true,
        length: 10
    }
    const [passwordCopied, setPasswordCopied] = useState(false);
    const [passwordOptions, setPasswordOptions] = useState(defaultOptions);
    const setPasswordOptionType = (e) => {
        setPasswordOptions({
            ...passwordOptions,
            type: e.target.value,
            });
    }
    const setPasswordOptionLength = (e) => {
        setPasswordOptions({
            ...passwordOptions,
            length: e.target.value,
            });
    }

    const regeneratePassword = (passwordOptions) => {
        const newPassword = generatePassword(passwordOptions);
        updatePassword(newPassword);
        setPasswordCopied(false);
    }

    const copyPassword = async () => {
        try {
            // Use the modern clipboard API
            await navigator.clipboard.writeText(password);
            // TODO: check clipboard before setting to true.
            setPasswordCopied(true);
        } catch (error) {
            setPasswordCopied(false);
        }
    }

    useEffect(() => {
        regeneratePassword(passwordOptions);
    }, [passwordOptions]);

    return(
        <>
            <label htmlFor="passwordTypes">Password Type:</label>
            <select className='passwordTypes' id="passwordTypes" onChange={(e) => setPasswordOptionType(e)}>
                <option value="Random">Random</option>
                <option value="Memorable">Memorable</option>
                <option value="PIN">PIN</option>
            </select>
            <button onClick={() => regeneratePassword(passwordOptions)}>Generate Password</button>
            <button onClick={() => copyPassword()}>Copy Secure Password</button>
            <div className={passwordCopied ? 'copied' : 'notCopied'}>{passwordCopied ? 'Password Copied' : 'Password Not Copied'}</div>
            <div>
                <label htmlFor="passwordLength">Length</label>
                <input className="passwordLength"
                    value={passwordOptions.length}
                    onChange={(e) => setPasswordOptionLength(e) }
                    min="5"
                    max="100"
                    type="number"/>
                <input type="checkbox" />
                <label>Numbers</label>
                <input type="checkbox" />
                <label>Symbols</label>
            </div>
        </>
    );
}

export default PasswordGeneratorOptions;
