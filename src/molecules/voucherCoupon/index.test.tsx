import React from "react";
import VoucherCoupon from ".";
import { AdjustmentType } from "../../stores/VoucherStore/types";
import { render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

describe("VoucherCouponTest", () => {
  const mockVoucherCode = {
    id: 1,
    code: "YOUR10OFF",
    title: "10% Off",
    expiry: new Date("2024-07-31"),
    adjustmentType: AdjustmentType.percentage,
    adjustmentValue: 10,
  };
  it("should render correctly", () => {
    const { getByTestId } = render(
      <VoucherCoupon voucher={mockVoucherCode} onUseVoucherClick={vi.fn()} />,
    );
    expect(getByTestId("voucherTitle").innerHTML).toBe("10% Off");
    expect(getByTestId("voucherSubTitle").innerHTML).toBe("Expiry: 31/07/2024");
  });
});
