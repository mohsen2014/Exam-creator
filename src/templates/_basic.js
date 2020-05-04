export default `
<div class="container">
    <div class="row">        
        <button class="btn btn-green test-register" disabled id="test-register">ثبت</button>
        
        <div class="btn-group btn-block" role="group">
            <button type="button" class="btn btn-blue">مشاهدی پیش نمایش</button>
            <button class="btn btn-lightblue" disabled id="test-register">مشاهده ی سوالات</button>
        </div>
    </div>
    <div class="row">
        <div id='question' class="desktop-col-6 tablet-col-6 phablet-col-12 phone-col-12">
            <div class="accordion"></div>
        </div>
        <div id='selected' class="desktop-col-6 tablet-col-6 hide-in-phone hide-in-phablet"></div>
    </div>
</div>
`;
