export function parseMoney(value) {
  if (value == null || value === "") return null;
  if (typeof value === "number") {
    if (!Number.isFinite(value) || value < 0) return null;
    return Math.round(value * 100);
  }
  const raw = String(value).trim().replace(/\s/g, "").replace("₴", "").replace(",", ".");
  if (!/^\d+(\.\d{1,2})?$/.test(raw)) return null;
  const [whole, fraction = ""] = raw.split(".");
  return Number(whole) * 100 + Number((fraction + "00").slice(0, 2));
}

export function formatMoney(amount) {
  if (amount == null || amount === "") return "";
  const cents = Number(amount);
  if (!Number.isFinite(cents)) return "";
  const sign = cents < 0 ? "-" : "";
  const absolute = Math.abs(cents);
  const whole = Math.floor(absolute / 100);
  const fraction = absolute % 100;
  const grouped = whole.toLocaleString("uk-UA").replace(/\u00A0/g, " ");
  if (!fraction) return `${sign}₴${grouped}`;
  return `${sign}₴${grouped},${String(fraction).padStart(2, "0")}`;
}

export function moneyToInput(amount) {
  if (amount == null || amount === "") return "";
  const cents = Number(amount);
  if (!Number.isFinite(cents)) return "";
  const whole = Math.floor(Math.abs(cents) / 100);
  const fraction = Math.abs(cents) % 100;
  return fraction ? `${whole}.${String(fraction).padStart(2, "0")}` : String(whole);
}
