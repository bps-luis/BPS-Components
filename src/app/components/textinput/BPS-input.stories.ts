import Input from "./BPS-input";
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'BPS-input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        name: { control: 'text' },
        placeholder: { control: 'text' },
        value: { control: 'text' },
        error: { control: 'text' },
        header: { control: 'text' },
    },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        name: 'input',
        placeholder: 'type here',
        value: 'l!@#$%^&*()_+',
        error: '',
        header: 'Input',
        onValueChange: (e: React.ChangeEvent<HTMLInputElement>) => {},
        funct: (e: React.ChangeEvent<HTMLInputElement>) =>  { },

    },
  };
