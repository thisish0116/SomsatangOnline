/* @ds-bundle: {"format":4,"namespace":"SomsatangOnlineDesignSystem_20ac9a","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Dialog","sourcePath":"components/surfaces/Dialog.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"43d5a459f239","components/core/Button.jsx":"75f9b9851efe","components/core/Card.jsx":"88d36fd199f3","components/core/IconButton.jsx":"60285a13e299","components/core/Tag.jsx":"88a1db2a0a99","components/feedback/Toast.jsx":"621ff7d75ada","components/feedback/Tooltip.jsx":"40b68943e3a9","components/forms/Checkbox.jsx":"fb05c6b9e6ef","components/forms/Input.jsx":"a6750a7efca4","components/forms/Select.jsx":"bcf3a5be0fab","components/forms/Switch.jsx":"83abd77a8dbc","components/navigation/Tabs.jsx":"73a74e40fcb3","components/surfaces/Dialog.jsx":"dd76648dd64e","ui_kits/shop/Storefront.jsx":"3f219ab239cb"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SomsatangOnlineDesignSystem_20ac9a = window.SomsatangOnlineDesignSystem_20ac9a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function Badge({
  children,
  color = "pink"
}) {
  const map = {
    pink: {
      bg: "var(--pink-200)",
      fg: "var(--pink-700)"
    },
    blue: {
      bg: "var(--blue-200)",
      fg: "var(--blue-700)"
    },
    yellow: {
      bg: "var(--yellow-200)",
      fg: "var(--brown-700)"
    },
    green: {
      bg: "var(--green-200)",
      fg: "var(--green-600)"
    }
  };
  const c = map[color] || map.pink;
  return React.createElement("span", {
    style: {
      background: c.bg,
      color: c.fg,
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-bold)",
      fontSize: "var(--text-xs)",
      padding: "4px 10px",
      borderRadius: "var(--radius-pill)",
      display: "inline-block"
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  style
}) {
  const sizes = {
    sm: {
      padding: "6px 14px",
      fontSize: "var(--text-sm)"
    },
    md: {
      padding: "10px 20px",
      fontSize: "var(--text-base)"
    },
    lg: {
      padding: "14px 28px",
      fontSize: "var(--text-md)"
    }
  };
  const variants = {
    primary: {
      background: "var(--brand-primary)",
      color: "var(--text-on-brand)",
      border: `var(--outline-width) solid var(--outline-toon)`,
      boxShadow: "var(--shadow-toon)"
    },
    secondary: {
      background: "var(--brand-secondary)",
      color: "var(--text-on-brand)",
      border: `var(--outline-width) solid var(--outline-toon)`,
      boxShadow: "var(--shadow-toon)"
    },
    ghost: {
      background: "transparent",
      color: "var(--brand-primary)",
      border: "2px solid var(--border-default)",
      boxShadow: "none"
    }
  };
  const v = variants[variant] || variants.primary;
  return React.createElement("button", {
    disabled,
    onClick,
    style: {
      ...sizes[size],
      ...v,
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-bold)",
      borderRadius: "var(--radius-pill)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transition: "transform .12s ease, box-shadow .12s ease",
      ...style
    },
    onMouseDown: e => {
      if (!disabled) {
        e.currentTarget.style.transform = "translateY(2px)";
        e.currentTarget.style.boxShadow = "none";
      }
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "";
      e.currentTarget.style.boxShadow = v.boxShadow;
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  children,
  padding = "var(--space-5)"
}) {
  return React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      borderRadius: "var(--radius-lg)",
      border: "2px solid var(--border-default)",
      boxShadow: "var(--shadow-md)",
      padding
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function IconButton({
  children,
  variant = "secondary",
  size = 40,
  onClick,
  "aria-label": ariaLabel
}) {
  const bg = variant === "primary" ? "var(--brand-primary)" : variant === "secondary" ? "var(--blue-200)" : "transparent";
  const color = variant === "primary" ? "#fff" : "var(--brand-primary)";
  return React.createElement("button", {
    onClick,
    "aria-label": ariaLabel,
    style: {
      width: size,
      height: size,
      borderRadius: "var(--radius-pill)",
      background: bg,
      color,
      border: variant === "ghost" ? "2px solid var(--border-default)" : `2px solid var(--outline-toon)`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      fontSize: size * 0.45,
      boxShadow: variant === "ghost" ? "none" : "var(--shadow-toon-sm)"
    }
  }, children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  selected = false,
  onClick
}) {
  return React.createElement("button", {
    onClick,
    style: {
      background: selected ? "var(--brand-primary)" : "var(--white)",
      color: selected ? "#fff" : "var(--text-body)",
      border: `2px solid ${selected ? "var(--brand-primary)" : "var(--border-default)"}`,
      borderRadius: "var(--radius-pill)",
      padding: "6px 14px",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      cursor: "pointer"
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  children,
  variant = "default"
}) {
  const bg = variant === "success" ? "var(--green-200)" : variant === "default" ? "var(--white)" : "var(--pink-100)";
  return React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      background: bg,
      border: "2px solid var(--outline-toon)",
      borderRadius: "var(--radius-md)",
      padding: "10px 18px",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      color: "var(--text-body)",
      boxShadow: "var(--shadow-toon-sm)"
    }
  }, children);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  children,
  label
}) {
  const [show, setShow] = React.useState(false);
  return React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-block"
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && React.createElement("span", {
    style: {
      position: "absolute",
      bottom: "120%",
      left: "50%",
      transform: "translateX(-50%)",
      background: "var(--outline-toon)",
      color: "#fff",
      padding: "4px 10px",
      borderRadius: "var(--radius-sm)",
      fontSize: "var(--text-xs)",
      fontFamily: "var(--font-body)",
      whiteSpace: "nowrap"
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  checked = false,
  onChange,
  label
}) {
  return React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-base)",
      color: "var(--text-body)",
      cursor: "pointer"
    }
  }, React.createElement("span", {
    onClick: () => onChange && onChange(!checked),
    style: {
      width: 22,
      height: 22,
      borderRadius: "var(--radius-sm)",
      border: "2px solid var(--outline-toon)",
      background: checked ? "var(--brand-primary)" : "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      fontSize: 14,
      fontWeight: "bold"
    }
  }, checked ? "✓" : ""), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  placeholder,
  value,
  onChange,
  type = "text"
}) {
  return React.createElement("input", {
    type,
    placeholder,
    value,
    onChange,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-base)",
      padding: "10px 16px",
      borderRadius: "var(--radius-md)",
      border: "2px solid var(--border-default)",
      outline: "none",
      background: "var(--surface-card)",
      color: "var(--text-body)",
      width: "100%",
      boxSizing: "border-box"
    },
    onFocus: e => e.currentTarget.style.borderColor = "var(--focus-ring)",
    onBlur: e => e.currentTarget.style.borderColor = "var(--border-default)"
  });
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  options = [],
  value,
  onChange
}) {
  return React.createElement("select", {
    value,
    onChange,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-base)",
      padding: "10px 16px",
      borderRadius: "var(--radius-md)",
      border: "2px solid var(--border-default)",
      background: "var(--surface-card)",
      color: "var(--text-body)",
      width: "100%"
    }
  }, options.map((o, i) => React.createElement("option", {
    key: i,
    value: o
  }, o)));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked = false,
  onChange
}) {
  return React.createElement("button", {
    onClick: () => onChange && onChange(!checked),
    style: {
      width: 48,
      height: 26,
      borderRadius: "var(--radius-pill)",
      border: "2px solid var(--outline-toon)",
      background: checked ? "var(--brand-primary)" : "var(--pink-100)",
      position: "relative",
      cursor: "pointer",
      transition: "background .15s"
    }
  }, React.createElement("span", {
    style: {
      position: "absolute",
      top: 1,
      left: checked ? 24 : 1,
      width: 20,
      height: 20,
      borderRadius: "50%",
      background: "#fff",
      boxShadow: "var(--shadow-sm)",
      transition: "left .15s"
    }
  }));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  active,
  onChange
}) {
  return React.createElement("div", {
    style: {
      display: "flex",
      gap: "6px",
      borderBottom: "2px solid var(--border-default)"
    }
  }, tabs.map((t, i) => React.createElement("button", {
    key: i,
    onClick: () => onChange && onChange(t),
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-bold)",
      fontSize: "var(--text-base)",
      padding: "10px 16px",
      border: "none",
      background: "transparent",
      color: t === active ? "var(--brand-primary)" : "var(--text-muted)",
      borderBottom: t === active ? "3px solid var(--brand-primary)" : "3px solid transparent",
      cursor: "pointer"
    }
  }, t)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Dialog.jsx
try { (() => {
function Dialog({
  open,
  onClose,
  title,
  children
}) {
  if (!open) return null;
  return React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(59,42,38,0.35)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 100
    }
  }, React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      borderRadius: "var(--radius-lg)",
      border: "3px solid var(--outline-toon)",
      boxShadow: "var(--shadow-toon)",
      padding: "var(--space-6)",
      maxWidth: 420,
      width: "90%"
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "var(--space-4)"
    }
  }, React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      color: "var(--brand-primary)",
      margin: 0,
      fontSize: "var(--text-xl)"
    }
  }, title), React.createElement("button", {
    onClick: onClose,
    style: {
      border: "none",
      background: "transparent",
      fontSize: 20,
      cursor: "pointer",
      color: "var(--text-muted)"
    }
  }, "✕")), children));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Dialog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/shop/Storefront.jsx
try { (() => {
const {
  Button,
  IconButton,
  Card,
  Badge,
  Tag,
  Tabs,
  Dialog,
  Toast
} = window.SomsatangOnlineDesignSystem_20ac9a;
const FLAVORS = [{
  name: "Strawberry Cloud",
  price: "₩8,000",
  color: "pink"
}, {
  name: "Blueberry Sky",
  price: "₩8,000",
  color: "blue"
}, {
  name: "Lemon Sparkle",
  price: "₩7,500",
  color: "yellow"
}, {
  name: "Melon Meadow",
  price: "₩7,500",
  color: "green"
}];
function Nav() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "14px 40px",
      background: "var(--white)",
      borderBottom: "2px solid var(--border-default)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.png",
    style: {
      height: 56
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 28,
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-bold)",
      color: "var(--text-body)",
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement("span", null, "Shop"), /*#__PURE__*/React.createElement("span", null, "Flavors"), /*#__PURE__*/React.createElement("span", null, "About"), /*#__PURE__*/React.createElement("span", null, "Track Order")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    "aria-label": "search"
  }, "\uD83D\uDD0D"), /*#__PURE__*/React.createElement(IconButton, {
    variant: "primary",
    "aria-label": "cart"
  }, "\uD83D\uDED2")));
}
function Hero() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      background: "var(--surface-sky)",
      height: 320,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 60px",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 480
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 48,
      color: "#fff",
      textShadow: "3px 3px 0 var(--outline-toon)"
    }
  }, "Sweet clouds, delivered."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "Shop flavors"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    style: {
      background: "var(--white)",
      color: "var(--brand-primary)"
    }
  }, "Our story"))), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/mascot-skewer-pixel.png",
    style: {
      height: 220,
      imageRendering: "pixelated"
    }
  }));
}
function FlavorCard({
  f
}) {
  return /*#__PURE__*/React.createElement(Card, {
    padding: "16px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: 110,
      background: "var(--" + f.color + "-100)",
      borderRadius: "var(--radius-md)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 40
    }
  }, "\uD83C\uDF6D"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 15,
      color: "var(--text-body)"
    }
  }, f.name), /*#__PURE__*/React.createElement(Badge, {
    color: f.color
  }, "New")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      color: "var(--text-muted)",
      fontSize: 14
    }
  }, f.price), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary"
  }, "Add")));
}
function Storefront() {
  const [tab, setTab] = React.useState("Best Sellers");
  const [cartOpen, setCartOpen] = React.useState(false);
  const [toast, setToast] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      background: "var(--surface-page)",
      minHeight: 760
    }
  }, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "32px 40px"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: ["Best Sellers", "Seasonal", "Gift Sets"],
    active: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      margin: "16px 0"
    }
  }, ["All", "Fruity", "Classic", "Limited"].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    selected: t === "All"
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 16
    }
  }, FLAVORS.map(f => /*#__PURE__*/React.createElement(FlavorCard, {
    key: f.name,
    f: f
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => {
      setToast(true);
      setTimeout(() => setToast(false), 2000);
    }
  }, "Checkout preview")), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    variant: "success"
  }, "Added to cart \uD83C\uDF89"))), /*#__PURE__*/React.createElement(Dialog, {
    open: cartOpen,
    onClose: () => setCartOpen(false),
    title: "Your Cart"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-body)",
      fontSize: 14
    }
  }, "2x Strawberry Cloud \u2014 \u20A916,000")));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(Storefront, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/shop/Storefront.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Dialog = __ds_scope.Dialog;

})();
