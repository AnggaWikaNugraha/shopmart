import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Login, { props } from '../screens/Login'
import { MemoryRouter } from "react-router-dom";

type Props = any

function renderLoginForm(props: Partial<Props> = {}) {
    const defaultProps: Props = {
        onEmail() {
            return;
        },
        onPassword() {
            return;
        },
        onSubmit() {
            return;
        },
    };
    return render(
        <MemoryRouter>
            <Login {...defaultProps} {...props} />
        </MemoryRouter>
    );
}

describe("<LoginForm />", () => {

    test("should display a blank login form", async () => {
        const { findByTestId } = renderLoginForm();
        const loginForm = await findByTestId("login-form");
        expect(loginForm).toHaveFormValues({
            email: "",
            password: "",
        });
    });

});