import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { useState } from "react";
import { Checkbox } from ".";

const meta = {
  title: "UI/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "neumorphism",
      values: [{ name: "neumorphism", value: "#e0e5ec" }],
    },
  },
  tags: ["autodocs"],
  args: {
    onChange: fn(),
  },
  argTypes: {
    checked: {
      control: "boolean",
      description: "チェック状態",
    },
    label: {
      control: "text",
      description: "ラベルテキスト",
    },
    onChange: {
      description: "変更ハンドラ",
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Controls パネルで自由に操作する用 */
export const Default: Story = {
  args: {
    checked: false,
    label: "チェックボックス",
  },
};

/** インタラクティブに切り替え可能 */
export const Interactive: Story = {
  args: {
    checked: false,
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked);

    return (
      <div style={{ padding: "40px" }}>
        <Checkbox
          checked={checked}
          onChange={setChecked}
          label={checked ? "チェック済み" : "未チェック"}
        />
      </div>
    );
  },
};

/** 状態の一覧 */
export const Overview: Story = {
  args: {
    checked: false,
  },
  render: () => {
    const row: React.CSSProperties = {
      display: "flex",
      gap: "24px",
      alignItems: "center",
    };
    const label: React.CSSProperties = {
      width: "100px",
      fontSize: "0.75rem",
      color: "#8899aa",
      flexShrink: 0,
    };
    const noop = () => {};

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "28px",
          padding: "40px",
        }}
      >
        <div style={row}>
          <span style={label}>未チェック</span>
          <Checkbox checked={false} onChange={noop} label="タスク A" />
        </div>
        <div style={row}>
          <span style={label}>チェック済み</span>
          <Checkbox checked={true} onChange={noop} label="タスク B" />
        </div>
        <div style={row}>
          <span style={label}>ラベルなし</span>
          <Checkbox checked={false} onChange={noop} />
          <Checkbox checked={true} onChange={noop} />
        </div>
      </div>
    );
  },
};
