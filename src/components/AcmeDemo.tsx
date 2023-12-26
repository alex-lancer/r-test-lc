import React, { useState } from 'react';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import AcmeDemoSlidePanel from './AcmeDemoSlidePanel';
import AcmeDemoApplicationDetails from './AcmeDemoApplicationDetails';
import { Chip } from '@mui/material';

const gridDataMock = [
    {
        id: 1,
        appName: 'Acme',
        category: 'Security Automation',
        appSources: [ 'Reco', 'appSources' ],
    },
    {
        id: 2,
        appName: 'Acme',
        category: 'Security Automation',
        appSources: [ 'Reco', 'appSources' ],
    },
    {
        id: 3,
        appName: 'Acme',
        category: 'Security Automation',
        appSources: [ 'Reco', 'appSources' ],
    },
    {
        id: 4,
        appName: 'Acme',
        category: 'Security Automation',
        appSources: [ 'Reco', 'appSources' ],
    },
]

const AcmeDemo = () => {
    const columns: GridColDef[] = [
        {
            field: 'appName',
            headerName: 'Application Name',
            width: 200,
        },
        {
            field: 'category',
            headerName: 'Category',
            width: 200,
        },
        {
            field: 'appSources',
            headerName: 'Connector',
            minWidth: 400,
            renderCell: (params: GridRenderCellParams<[]>) => {
                if (!params.value) return '';

                return (params?.value.map((item: string) => (<Chip label={item} />)));
            }
        },
    ]
    const gridInitialState = {
        pagination: {
            paginationModel: {
                pageSize: 25,
            },
        },
    }
    const [isSlidePanelOpen, setIsSlidePanelOpen] = useState(false);
    return (
        <>
            <h1>Acme Demo is under construction</h1>
            <div>
                <DataGrid
                    columns={columns}
                    rows={gridDataMock}
                    initialState={gridInitialState}
                    onRowClick={() => setIsSlidePanelOpen(true)}
                ></DataGrid>
                <AcmeDemoSlidePanel
                    isOpen={isSlidePanelOpen}
                    onClose={() => setIsSlidePanelOpen(false)}
                >
                    <AcmeDemoApplicationDetails />
                </AcmeDemoSlidePanel>
            </div>
        </>
    );
}

export default AcmeDemo;
