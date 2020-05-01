export default `
<div class="col-4"><%=question%></div>
<div class="col-2-4"><%=answer_a%></div>
<div class="col-2-4"><%=answer_b%></div>
<div class="col-2-4"><%=answer_c%></div>
<div class="col-2-4"><%=answer_d%></div>
<%if(!selected){%>
    <div class="col-4"><button class="button select-question" type="button">Add</button></div>
<%} else {%>
    <div class="col-4"><button class="button deselect-question" type="button">remove</button></div>
<%}%>
`;
