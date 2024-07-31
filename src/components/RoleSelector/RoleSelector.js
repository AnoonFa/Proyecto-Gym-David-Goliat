import React from 'react';

const RoleSelector = ({ setRole }) => {
    return (
        <div className="role-selector">
            <button onClick={() => setRole('cliente')}>Cliente</button>
            <button onClick={() => setRole('empleado')}>Empleado</button>
            <button onClick={() => setRole('administrador')}>Administrador</button>
        </div>
    );
};

export default RoleSelector;