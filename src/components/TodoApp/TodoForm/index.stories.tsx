import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { TodoForm } from ".";

const meta = {
  title: "Components/TodoApp/TodoForm",
  component: TodoForm,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "neumorphism",
      values: [{ name: "neumorphism", value: "#e0e5ec" }],
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "520px", padding: "24px" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    onAdd: fn(),
  },
  argTypes: {
    onAdd: {
      description: "TODO追加ハンドラ",
    },
  },
} satisfies Meta<typeof TodoForm>;

export default meta;
type Story = StoryObj<typeof meta>;

/** デフォルト状態（空のフォーム） */
export const Default: Story = {};
