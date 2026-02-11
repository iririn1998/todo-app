import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextInput } from ".";

const meta = {
  title: "UI/TextInput",
  component: TextInput,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "neumorphism",
      values: [{ name: "neumorphism", value: "#e0e5ec" }],
    },
  },
  tags: ["autodocs"],
  argTypes: {
    inputSize: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "インプットのサイズ",
    },
    placeholder: {
      control: "text",
      description: "プレースホルダー",
    },
    disabled: {
      control: "boolean",
      description: "無効状態",
    },
  },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Controls パネルで自由に操作する用 */
export const Default: Story = {
  args: {
    placeholder: "テキストを入力...",
  },
};

/** サイズ × 状態の一覧 */
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
          width: "480px",
        }}
      >
        {/* サイズ */}
        <div style={row}>
          <span style={label}>Small</span>
          <TextInput inputSize="sm" placeholder="Small input" />
        </div>
        <div style={row}>
          <span style={label}>Medium</span>
          <TextInput inputSize="md" placeholder="Medium input" />
        </div>
        <div style={row}>
          <span style={label}>Large</span>
          <TextInput inputSize="lg" placeholder="Large input" />
        </div>

        {/* 状態 */}
        <div style={row}>
          <span style={label}>入力済み</span>
          <TextInput defaultValue="入力されたテキスト" />
        </div>
        <div style={row}>
          <span style={label}>無効</span>
          <TextInput placeholder="無効状態" disabled />
        </div>
      </div>
    );
  },
};
