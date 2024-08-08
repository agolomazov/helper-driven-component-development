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
  name: 'Clipboard (primary light)',
  args: {
    value: 'Anton Golomazov',
    label: 'Скопировать ссылку',
    message: 'Данные скопированы',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  name: 'Clipboard (secondary light)',
  args: {
    value: 'Anton Golomazov',
    label: 'Скопировать ссылку',
    message: 'Данные скопированы',
    variant: 'secondary',
  },
};

export const DarkPrimary: Story = {
  name: 'Clipboard (primary dark)',
  args: {
    value: 'Anton Golomazov',
    label: 'Скопировать ссылку',
    message: 'Данные скопированы',
    variant: 'primary',
  },
  parameters: {
    backgrounds: {
      theme: 'dark',
    },
  },
};

export const DarkSecondary: Story = {
  name: 'Clipboard (secondary dark)',
  args: {
    value: 'Anton Golomazov',
    label: 'Скопировать ссылку',
    message: 'Данные скопированы',
    variant: 'secondary',
  },
  parameters: {
    backgrounds: {
      theme: 'dark',
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          padding: '10rem',
          background: '#ededed',
          borderRadius: '10px',
        }}
      >
        <Story />
      </div>
    ),
  ],
};
