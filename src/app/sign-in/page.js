'use client'
import React, { useState } from 'react';
// MUI stuff imported
import { IconButton, InputAdornment, TextField } from '@mui/material';

// Icons imported from React icons
import { FiLock, FiUnlock } from 'react-icons/fi';
// React form stuff imported
import { useForm } from 'react-hook-form';

const SignIn = () => {
    // Stuff related to react-hook-form
    const {
        getValues,
        setValue,
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm({ mode: 'onChange' });
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    return (
        <div className={`flex flex-col justify-center items-center bg-blue-800`}>
            <div className={`flex flex-col justify-center items-center w-10/12 sm:max-w-[450px] sm:w-4/5 bg-amber-800`}>
                <TextField
                    className={`w-3/4`}
                    label="Email"
                    variant="outlined"
                    InputProps={{
                        style: { fontSize: 14, fontWeight: 400 },
                    }}
                    InputLabelProps={{
                        style: { fontSize: 14, color: 'gray' },
                    }}
                    {...register('email', {
                        required: 'Required field',
                        onChange: () => {
                            setValue(
                                'email',
                                getValues('email').replace(
                                    /[^a-zA-Z0-9!#$%&'*+-/=?^_`{|@.]/gm,
                                    ''
                                )
                            );
                        },
                    })}
                    error={!!errors?.email}
                    helperText={errors?.email ? errors.email.message : null}
                />
                <TextField
                    // className={classes.textCheck}
                    label="Password"
                    variant="outlined"
                    type={showPassword ? 'text' : 'password'} // <-- This is where the magic happens
                    InputLabelProps={{
                        style: { fontSize: 14, color: 'gray' },
                    }}
                    InputProps={{
                        style: { fontSize: 14, fontWeight: 400 },
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                >
                                    {showPassword ? <FiUnlock /> : <FiLock />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    {...register('password', {
                        required: 'Required field',
                        onChange: () => {
                            setValue(
                                'password',
                                getValues('password').replace(
                                    /[^a-zA-Z0-9!#$%&'*+-/=?^_`{|@.]/gm,
                                    ''
                                )
                            );
                        },
                    })}
                    helperText={
                        errors?.password ? errors.password.message : null
                    }
                />
                <div className={`flex justify-end items-end`}>
                    <p className={``}>
                        Forgot Password?
                    </p>
                </div>
                <button
                    className="flex-shrink-0 rounded border-0 bg-blue-600 px-4 py-2 text-white transition duration-300 ease-in-out text-md hover:bg-blue-700 focus:outline-none sm:mt-0 sm:px-8">
                    Sign In
                </button>
            </div>
        </div>
    );
};

export default SignIn;