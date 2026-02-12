import type { Meta, StoryObj } from "@storybook/react-vite";
import { TodoApp } from ".";

const meta = {
  title: "Components/TodoApp",
  component: TodoApp,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "neumorphism",
      values: [{ name: "neumorphism", value: "#e0e5ec" }],
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          minHeight: "100vh",
          background: "#e0e5ec",
          padding: "32px 16px",
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TodoApp>;

export default meta;
type Story = StoryObj<typeof meta>;

/** TODOアプリケーション全体（インタラクティブ） */
export const Default: Story = {};
