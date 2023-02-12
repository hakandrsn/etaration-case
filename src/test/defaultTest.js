import {render as rtlRender} from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from "../redux/store";
import {BrowserRouter} from "react-router-dom";
export const render = component => rtlRender(
    <Provider store={store}>
        <BrowserRouter>
            {component}
        </BrowserRouter>
    </Provider>
)