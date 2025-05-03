import React from 'react';

type AlertType = 'info' | 'success' | 'warning' | 'error' | 'default';

interface AlertProps {
    message: string;
    type?: AlertType;
    onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ message, type = 'default', onClose }) => {
    const getStyles = () => {
        switch (type) {
            case 'info':
                return 'text-blue-800 bg-blue-50 dark:bg-gray-800 dark:text-blue-400';
            case 'success':
                return 'text-green-800 bg-green-50 dark:bg-gray-800 dark:text-green-400';
            case 'warning':
                return 'text-yellow-800 bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300';
            case 'error':
                return 'text-red-800 bg-red-50 dark:bg-gray-800 dark:text-red-400';
            default:
                return 'text-gray-800 bg-gray-50 dark:bg-gray-800 dark:text-gray-300';
        }
    };

    const getIconColor = () => {
        switch (type) {
            case 'info':
                return 'text-blue-500';
            case 'success':
                return 'text-green-500';
            case 'warning':
                return 'text-yellow-500';
            case 'error':
                return 'text-red-500';
            default:
                return 'text-gray-500';
        }
    };

    const getCloseButtonStyles = () => {
        switch (type) {
            case 'info':
                return 'bg-blue-50 text-blue-500 hover:bg-blue-200';
            case 'success':
                return 'bg-green-50 text-green-500 hover:bg-green-200';
            case 'warning':
                return 'bg-yellow-50 text-yellow-500 hover:bg-yellow-200';
            case 'error':
                return 'bg-red-50 text-red-500 hover:bg-red-200';
            default:
                return 'bg-gray-50 text-gray-500 hover:bg-gray-200';
        }
    };

    return (
        <div
            className={`fixed top-4 right-4 flex items-center p-4 mb-4 rounded-lg ${getStyles()} shadow-lg z-50`}
            role="alert"
        >
            <svg
                className={`shrink-0 w-4 h-4 ${getIconColor()}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">Info</span>
            <div className="ms-3 text-sm font-medium">{message}</div>
            <button
                type="button"
                className={`ms-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 p-1.5 inline-flex items-center justify-center h-8 w-8 ${getCloseButtonStyles()}`}
                aria-label="Close"
                onClick={onClose}
            >
                <span className="sr-only">Close</span>
                <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                </svg>
            </button>
        </div>
    );
};

export default Alert;