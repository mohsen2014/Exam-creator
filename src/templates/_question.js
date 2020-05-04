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
                <ul>
                    <li><%=answer_a%></li>
                    <li><%=answer_b%></li>
                    <li><%=answer_c%></li>
                    <li><%=answer_d%></li>
                </ul>
            </div>
        </div>
    </div>
`;

const $selected = `
        <div class="row">
            <div class="col-10">
                <%=question%>
            </div>
            <div class="col-2" style="text-align: end">
                <button class="btn btn-outline-red deselect-question inline-block" type="button"><i class="far fa-trash-alt"></i></button>
            </div>
        </div>
        <div class="text-padding" >
            <ul>
                <li><%=answer_a%></li>
                <li><%=answer_b%></li>
                <li><%=answer_c%></li>
                <li><%=answer_d%></li>
            </ul>
        </div>
        
        `;
export {
  $question,
  $selected,
};
