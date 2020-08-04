import React from "react";
import { create } from "react-test-renderer";
import Paginator from "./Paginator";


describe("Paginator component tests", () => {
    test("page count is 11 but should be showed 10", () => {
        const component = create(<Paginator totalItemsCount={11} portionSize={10} pageSize={1}/>);
        const root = component.root;
        const spans = root.findAllByType("span");
        expect(spans.length).toBe(10);
    });
    test("if pages count more then 10 should be show button NEXT", () => {
        const component = create(<Paginator totalItemsCount={11} portionSize={10} pageSize={1}/>);
        const root = component.root;
        const button = root.findAllByType("button");
        expect(button.length).toBe(1);
    });
})
