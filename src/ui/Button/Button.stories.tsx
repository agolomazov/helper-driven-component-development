import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import Button from './Button';

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  argTypes: {
    variant: { control: 'select', description: 'Вариант цвета кнопки' },
    size: { control: 'radio', description: 'Варианты размеров кнопки' },
    children: { control: 'text', description: 'Текст кнопки' },
  },
  args: { onClick: fn() },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  name: 'Основная кнопка UIKit',
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Primary button',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole('button'));

    await expect(canvas.getByRole('button')).toBeInTheDocument();
    await expect(canvas.getByText('Primary button')).toBeInTheDocument();
  },
};

export const Secondary: Story = {
  name: 'Второстепенная кнопка',
  args: {
    variant: 'secondary',
    size: 'md',
    children: 'Secondary button',
  },
};
