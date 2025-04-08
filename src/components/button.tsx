"use client"

type Props = {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: "primary" | "danger" | "secondary";
    disabled?: boolean;
};

export const Button = ({
    children,
    onClick,
    variant = "primary",
    disabled = false,
}: Props) => {
    const base = "px-4 py-2 rounded text-white font-semibold";
    const variants = {
        primary: "bg-blue-600 hover:bg-blue-700",
        danger: "bg-red-600 hover:bg-red-700",
        secondary: "bg-gray-600 hover:bg-gray-700",
        void: "",
    };

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`${base} ${variants[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
        >
            {children}
        </button>
    );
};

export default Button;
