import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("Status from props", () => {
        const component = create(<ProfileStatus status="It-incubator" />);
        const instance = component.getInstance();
         expect(instance.state.status).toBe("It-incubator");
    });

    test("after creation <span> should be display", () => {
        const component = create(<ProfileStatus status="It-incubator" />);
        const root = component.root;
        let span = root.findByType('span');
        expect(span.length).not.toBeNull();
    });
    test("after creation <input> should`t display", () => {
        const component = create(<ProfileStatus status="It-incubator" />);
        const root = component.root;

        expect(() => {
            let input = root.findByType('input');
        }).toThrow();
    });

    test("after creation <span> should be display1", () => {
        const component = create(<ProfileStatus status="It-incubator" />);
        const root = component.root;
        let span = root.findByType('span');
        expect(span.children[0]).toBe('It-incubator');
    });

    test("input should be  displaed in editMode of span", () => {
        const mocCallback = jest.fn();
        const component = create(<ProfileStatus status="It-incubator"  updateStatus={mocCallback} />);
        const instance = component.getInstance();
        instance.deActivateEditMode();
        expect(mocCallback.mock.calls.length).toBe(1);
    });
});