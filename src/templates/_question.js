export default `
<%if(!selected){%>
    <div class="col-4 card-header">
        <a href='#'><h5><%=question%></h5></a>
        <div class="col-4" >
                <button  class="btn btn-outline-blue select-question" type="button">اضافه به آزمون</button>
        </div>
    </div>
    <div class="collapse">
        <div class="row">
            <h6 class="col-2-4"><%=answer_a%></h6>
            <h6 class="col-2-4"><%=answer_b%></h6>
            <h6 class="col-2-4"><%=answer_c%></h6>
            <h6 class="col-2-4"><%=answer_d%></h6>  
        </div>
    </div>
<%} else {%>
    <div class="col-4">
        <h5><%=question%></h5>
        <div class="col-4"><button class="btn btn-outline-red deselect-question" type="button">حذف از آزمون</button></div>
    </div>
    <div class="row">
        <div class="col-2-4"><%=answer_a%></div>
        <div class="col-2-4"><%=answer_b%></div>
        <div class="col-2-4"><%=answer_c%></div>
        <div class="col-2-4"><%=answer_d%></div>
    </div>
<%}%>
`;
