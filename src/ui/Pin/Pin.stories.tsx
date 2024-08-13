import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Pin from './Pin';

const meta = {
  title: 'Components/Pin',
  component: Pin,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      description: 'Вариант стилей контролла',
    },
    value: {
      control: 'object',
      description: 'Значение контрола (массив строк)',
    },
    mask: { control: 'boolean', description: 'Включить маскирование значения' },
    autoFocus: { control: 'boolean', description: 'Включить автофокус' },
    placeholder: { control: 'text', description: 'Текст placeholder' },
    dir: { control: 'radio', description: 'Направление письма' },
    disabled: {
      control: 'boolean',
      description: 'Заблокирован для редактирования',
    },
    invalid: { control: 'boolean', description: 'Валидный ли контрол' },
    required: { control: 'boolean', description: 'Обязательное поле' },
    readOnly: {
      control: 'boolean',
      description: 'Поле обязательно только для чтения',
    },
    onValueChange: {
      description: 'Функция для запуска на изменение значения поля',
    },
    onValueComplete: {
      description: 'Функция для запуска на изменение значения поля',
    },
  },
  args: {
    onValueComplete: fn((details) => console.log(details)),
    onValueChange: fn((details) => console.log(details)),
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Pin>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  name: 'PinInput (primary)',
  args: {
    value: undefined,
    variant: 'primary',
    name: 'pin',
    mask: true,
    type: 'numeric',
    autoFocus: true,
  },
};

export const PrimaryUnmask: Story = {
  name: 'PinInput (unmask)',
  args: {
    value: undefined,
    variant: 'secondary',
    name: 'pin',
    mask: false,
    type: 'numeric',
    autoFocus: true,
  },
};
