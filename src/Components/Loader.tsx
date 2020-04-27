import React from 'react'

interface LoaderProps {

}

export const Loader: React.FC<LoaderProps> = ({}) => {
        return <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>;
};