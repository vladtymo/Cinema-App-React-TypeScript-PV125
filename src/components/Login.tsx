import { Alert, Box, Button, Collapse, IconButton, Snackbar, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { ILoginModel } from "../models/login-user";

export default function Login() {

    const [open, setOpen] = useState(false);

    const {
        register,       // to attrack changes of form inputs
        handleSubmit,   // onSubmit event handler
        formState: { errors },
        // add validators
    } = useForm<ILoginModel>();

    const onSubmit = (user: ILoginModel) => {
        console.log(`User ${user.email} ${user.password}`);
        setOpen(true);
    }

    return (
        <>
            <div className="Login">
                <Box sx={{ width: '100%' }}>
                    <Snackbar open={open} autoHideDuration={6000}
                    anchorOrigin={{ vertical: "top", horizontal: "center" }}>
                        <Alert severity="success" sx={{ width: '100%' }}>
                            User information: email... password... !
                        </Alert>
                    </Snackbar>
                </Box>

                <h2>Login Form</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <TextField  {...register("email")} name="email" type="email" label="Email" variant="standard" />
                    <TextField  {...register("password")} name="password" label="Password" type="password" variant="standard" />

                    <Button variant="contained" type="submit">Login</Button>
                </form>
            </div>
        </>
    );
}