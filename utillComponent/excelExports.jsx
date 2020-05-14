import React from 'react'
/**
 * 저장할 csv 파일 이름과 Object Array를 받으면 csv파일로 exports 해주는 컴포넌트
 * @argument tableData: Array<Object> 
 * @argument filename: String
 * @argument t: i18n t 함수
 * @argument children: React.Component
 */
const ExcelExports = ({ tableData, filename, children }) => {
    /**
     * table element를 받아서 tableData를 통해 table을 가상 렌더링하는 함수
     */
    const tableVirtualRender = (table) => {
        const tHead = document.createElement('thead');
        const tBody = document.createElement('tbody');
        const keys = Object.keys(tableData[0]);
        const tHeadRow = document.createElement('tr');
        keys.map((key) => {
            const th = document.createElement('th');
            th.textContent = key;
            tHeadRow.appendChild(th);
        })
        tableData.map((data) => {
            const tr = document.createElement('tr');
            keys.map((key) => {
                const td = document.createElement('td');
                td.textContent = data[key];
                tr.appendChild(td);
            })
            tBody.appendChild(tr);
        })  
        
        tHead.appendChild(tHeadRow);
        table.appendChild(tHead);
        table.appendChild(tBody);
    }
    const exportExcel = () => {
        if (tableData.length === 0) {
            alert("테이블에 데이터가 없습니다.");
            return;
        }
        const table = document.createElement('table');
        tableVirtualRender(table);
        let csvString = "\uFEFF";
        for (let rowCnt = 0 ; rowCnt < table.rows.length; rowCnt++) {
            const rowData = table.rows[rowCnt].cells;
            for (let colCnt = 0 ; colCnt < rowData.length; colCnt++) {
                let columnData = rowData[colCnt].innerHTML;
                if (columnData === null || columnData.length === 0) {
                    columnData = "".replace(/"/g, '""');
                } else {
                    columnData = columnData.toString().replace(/"/g, '""');
                }
                csvString += `"${columnData}",`;
            }
            csvString = csvString.substring(0, csvString.length - 1);
            csvString = csvString + "\r\n";
        }
        
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            /**
             * IE 10, 11 run
             */
            const blob = new Blob([decodeURIComponent(csvString)], {
                type: 'text/csv;charset=utf8'
            })
            window.navigator.msSaveOrOpenBlob(blob, `${filename}.csv`)
        } else {
            /**
             * Chrome run
             */
            const csvData = `data:application/csv;charset=utf-8,${encodeURIComponent(csvString)}`;
            const blob = new Blob([csvString], { type: 'text/csv;charset=utf8'});
            const csvUrl = URL.createObjectURL(blob);
            const linker = document.createElement('a');
            linker.setAttribute('style', 'display:none');
            linker.setAttribute('target', '_blank');
            linker.setAttribute('href', csvUrl);
            linker.setAttribute('download', `${filename}.csv`)
            document.body.appendChild(linker);
            linker.click();
            linker.remove();
        }
    }
    return (
        <div>
            <button onClick={exportExcel}>    
                { children }
            </button>
        </div>
    )
}

export default ExcelExports;