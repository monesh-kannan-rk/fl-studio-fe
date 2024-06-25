import React from 'react'

function TableData({content}) {
    console.log(content)
  return (
    <>
        <span>{content.header}</span>
        <table>
            <colgroup>
                <col />
                <col span={1}style={{backgroundColor:"#f8fbff"}}/>
                <col style={{}}/>
            </colgroup>
            <tbody>
                {content?.lines.map((data, index) =>{
                    let lineStyle = {};
                    if (data.content.startsWith('-')) {
                      lineStyle = { backgroundColor: '#ffe4e9' };
                    } else if (data.content.startsWith('+')) {
                      lineStyle = { backgroundColor: '#d8ffcb' };
                    }
                    return<>
                        <tr key={index} style={lineStyle}>
                            <td className='line-number'>{data.baseLineNumber}</td>
                            <td className='line-number'>{data.headLineNumber}</td>
                            <td>
                                <pre style={{ margin: 0 }}>{data.content}</pre>
                            </td>
                        </tr>
                    </>
                })}
                
            </tbody>
        </table>
    </>
  )
}

export default TableData