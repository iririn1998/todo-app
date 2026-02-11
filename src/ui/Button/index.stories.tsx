import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from ".";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "neumorphism",
      values: [{ name: "neumorphism", value: "#e0e5ec" }],
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "primary", "danger"],
      description: "ボタンのバリエーション",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "ボタンのサイズ",
    },
    pressed: {
      control: "boolean",
      description: "押し込み状態",
    },
    disabled: {
      control: "boolean",
      description: "無効状態",
    },
    children: {
      control: "text",
      description: "ボタンのラベル",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Controls パネルで自由に操作する用 */
export const Default: Story = {
  args: {
    children: "Button",
  },
};

/** バリアント × サイズ × 状態の一覧 */
export const Overview: Story = {
  render: () => {
    const row: React.CSSProperties = {
      display: "flex",
      gap: "24px",
      alignItems: "center",
    };
    const label: React.CSSProperties = {
      width: "80px",
      fontSize: "0.75rem",
      color: "#8899aa",
      flexShrink: 0,
    };

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "28px",
          padding: "40px",
        }}
      >
        {/* バリアント */}
        <div style={row}>
          <span style={label}>Variant</span>
          <Button variant="default">Default</Button>
          <Button variant="primary">Primary</Button>
          <Button variant="danger">Danger</Button>
        </div>

        {/* サイズ */}
        <div style={row}>
          <span style={label}>Size</span>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>

        {/* 状態 */}
        <div style={row}>
          <span style={label}>State</span>
          <Button pressed>Pressed</Button>
          <Button disabled>Disabled</Button>
        </div>

        {/* アイコン */}
        <div style={row}>
          <span style={label}>Icon</span>
          <Button icon="✚" variant="primary">
            Add Task
          </Button>
          <Button icon="✕" variant="danger" aria-label="Close" />
        </div>
      </div>
    );
  },
};
