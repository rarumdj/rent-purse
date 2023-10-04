import cs from 'classnames';
import React from 'react';

const StringType = React.memo(
  ({ value, fontBold, withSubString, withColor }: any) => {
    if (!value) return <div />;

    return (
      <span className={cs('text-sm', { ['font-bold']: fontBold })}>
        <div>
          {withColor ? (
            <span
              style={{
                color: `${value?.color || '#0000'}`,
              }}
            >
              {value.sign && value.sign} {value.value}
            </span>
          ) : (
            value
          )}

          {withSubString && <p className="text-xs">{withSubString}</p>}
        </div>
      </span>
    );
  }
);
export default StringType;
