import type { Meta, StoryObj } from '@storybook/react';
import Clipboard from './ClipBoard';

const meta = {
  title: 'Components/Clipboard',

  component: Clipboard,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      description: 'Вариант стилизации компонента',
    },
    label: {
      control: 'text',
      description: 'Текст подсказки для контрола',
    },
    message: {
      control: 'text',
      description: 'Сообщение после успешного копирования значения',
    },
    value: {
      control: 'text',
      description: 'Копируемое значение',
    },
  },
  args: {},
  tags: ['autodocs'],
} satisfies Meta<typeof Clipboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  name: 'Clipboard (primary)',
  args: {
    value: 'Anton Golomazov',
    label: 'Скопировать ссылку',
    message: 'Данные скопированы',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  name: 'Clipboard (primary)',
  args: {
    value: 'Anton Golomazov',
    label: 'Скопировать ссылку',
    message: 'Данные скопированы',
    variant: 'secondary',
  },
};
