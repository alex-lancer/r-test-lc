import React, { FC, ReactElement } from 'react';
import { Modal } from '@mui/material';

import './AcmeDemoSlidePanel.css';

type AcmeDemoSLidePanelType = {
    isOpen: boolean,
    children: ReactElement,
    onClose: () => void,
};

const AcmeDemoSlidePanel:FC<AcmeDemoSLidePanelType> = ({isOpen, onClose, children}) => {
  return (
      <Modal
          open={isOpen}
          onClose={onClose}
      >
          <div className={'AcmeDemoSlidePanel'} >
              { children }
          </div>
      </Modal>
  )
}

export default AcmeDemoSlidePanel;
