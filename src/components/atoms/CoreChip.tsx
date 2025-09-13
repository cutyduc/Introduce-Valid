import { Chip, ChipProps as MuiChipProps } from "@mui/material";

/**
 * CoreChipProps = kế thừa toàn bộ props từ MUI Chip
 * + bạn có thể thêm props custom riêng ở đây
 */
export interface CoreChipProps extends MuiChipProps {
  highlight?: boolean; // 🔹 Custom prop riêng: làm label đậm hơn
  lable: string;
  clickable?: boolean;
}

// ✅ Danh sách props có sẵn của MUI Chip (tham khảo nhanh)
/**
 * avatar?: React.ReactNode;                // Avatar (icon/ảnh tròn nhỏ) trước label
 * children?: never;                        // ❌ Không hỗ trợ children (dùng label thay thế)
 * classes?: object;                        // Override style cho từng phần (root, label...)
 * clickable?: boolean;                     // Nếu true, chip có hiệu ứng hover/click
 * color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | string;  // Màu sắc
 * component?: React.ElementType;           // Component gốc (div, a, span...)
 * deleteIcon?: React.ReactNode;            // Icon thay thế cho nút xóa
 * disabled?: boolean;                      // Disable chip
 * icon?: React.ReactNode;                  // Icon nhỏ đặt trước label (khác avatar)
 * label?: React.ReactNode;                 // Nội dung chính hiển thị
 * onDelete?: (event) => void;              // Callback khi bấm icon xóa
 * size?: 'small' | 'medium' | string;      // Kích cỡ chip
 * skipFocusWhenDisabled?: boolean;         // Nếu true, chip disabled không nhận focus
 * slotProps?: object;                      // Truyền props cho slot con (root, label, deleteIcon...)
 * slots?: object;                          // Override component cho slot con
 * sx?: SxProps<Theme>;                     // Tuỳ chỉnh style (CSS-in-JS)
 * variant?: 'filled' | 'outlined' | string; // Kiểu giao diện (mặc định: filled)
 */

export default function CoreChip(props: CoreChipProps) {
  const { highlight, sx, lable, clickable = true, ...rest } = props;

  return (
    <Chip
      clickable={clickable}
      label={lable}
      {...rest}
      sx={{
        fontWeight: highlight ? 700 : 400, // custom prop
        ...sx,
      }}
    />
  );
}
