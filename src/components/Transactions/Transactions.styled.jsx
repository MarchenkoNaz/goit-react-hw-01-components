import styled from "styled-components";

const Table = styled.table`
	margin: 0;
	margin-top: 40px;
	width: 100%;

	border-collapse: collapse;
`

const TableHeading = styled.th`

	padding: 20px;

	text-align: center;

	background-color: #04aa6d;
	color: white;
`

const TableData = styled.td`
	padding: 8px;

	text-align: center;
	text-transform: capitalize;

	font-size: 16px;
	border: 1px solid #ddd;
`

export {
	Table, TableHeading, TableData
}