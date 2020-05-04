const $question = `
    <div class="card">
        <div class="card-header">
            <a href='#'><%=question%></a>
            <%if(!selected){%>
                <button class="hide-in-phone hide-in-phablet btn btn-outline-blue select-question" type="button">اضافه به آزمون</button>
                <button class="hide-in-desktop hide-in-tablet btn btn-outline-blue clear-border" type="button"><i class="fas fa-plus"></i></button>

            <%}else {%>
                <button class="hide-in-phone hide-in-phablet btn btn-outline-red select-question" type="button">حذف از آزمون</button>
                <button class="hide-in-desktop hide-in-tablet btn btn-outline-red clear-border" type="button"><i class="fas fa-trash-alt"></i></button>

            <%}%>
        </div>
        <div class="collapse">
            <div class="card-body text-padding">
                <div class="row"><div class="col-12"><%=answer_a%></div></div>
                <div class="row"><div class="col-12"><%=answer_b%></div></div>
                <div class="row"><div class="col-12"><%=answer_c%></div></div>
                <div class="row"><div class="col-12"><%=answer_d%></div></div>
            </div>
        </div>
    </div>
`;

const $selected = `
    <div class="card">
        <div class="row">
            <div class="col-10">
                <%=question%>
            </div>
            <div class="col-2" style="text-align: end">
                <button class="btn btn-outline-red deselect-question inline-block" type="button"><i class="far fa-trash-alt"></i></button>
            </div>
        </div>
        <div class="text-padding" >
            <div class="row"><div class="col-12"><%=answer_a%></div></div>
            <div class="row"><div class="col-12"><%=answer_b%></div></div>
            <div class="row"><div class="col-12"><%=answer_c%></div></div>
            <div class="row"><div class="col-12"><%=answer_d%></div></div>
        </div>
    </div>
        
        `;
export {
  $question,
  $selected,
};
