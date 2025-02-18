import React from 'react';

const JSONTreeValueNode = ({ data, type }) => {
  if (type === 'Function') {
    const functionString = `${data.toString().split('{')[0].trim()}{...}`;
    return (
      <React.Fragment>
        <span
          className={`text-secondary node-value-${type}`}
          style={{ fontSize: '12px', fontFamily: 'monospace', textTransform: 'none' }}
        >
          {functionString}
        </span>
      </React.Fragment>
    );
  }

  const value = type === 'String' ? `"${data}"` : String(data);
  const clsForUndefinedOrNull = (type === 'Undefined' || type === 'Null') && 'badge badge-secondary';
  return (
    <span
      className={`mx-2 json-tree-valuetype json-tree-node-${String(
        type
      ).toLowerCase()} text-break ${clsForUndefinedOrNull}`}
    >
      {value}
    </span>
  );
};

export default JSONTreeValueNode;
