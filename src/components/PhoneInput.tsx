import React, { useState } from 'react';
import InputMask from 'react-input-mask';

const PhoneInput: React.FC<{
    value: string;
    onChange: (value: string) => void;
}> = ({ value, onChange }) => {
    return (
        <InputMask
            mask="+7 (999) 999-99-99"
            value={value}
            onChange={(e) => onChange(e.target.value)}
        >
            {/* @ts-ignore */}
            {(inputProps: any) => (
                <input
                    {...inputProps}
                    type="tel"
                    placeholder="+7 (XXX) XXX-XX-XX"
                    className="block w-full p-4 text-gray-900 border-gray-50 rounded-lg bg-gray-50
                               text-base shadow-lg focus:ring-custom-green-500 focus:border-custom-green-500"
                />
            )}
        </InputMask>
    );
};

export default PhoneInput;