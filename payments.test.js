describe('payments tests', function() {
    beforeEach(function() {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        allPayments = {};
    })

    it('createCurPayment() should return undefined with negative tip input', function () {
        tipAmtInput.value = -20;      
        expect(createCurPayment()).toBeUndefined();
    });

    it('createCurPayment() should return undefined with negative bill input', function () {
        billAmtInput.value = -100;
        expect(createCurPayment()).toBeUndefined();
    });

    it('createCurPayment() should return undefined with empty tip input', function () {
        tipAmtInput.value = '';
        expect(createCurPayment()).toBeUndefined();
    });

    it('createCurPayment() should return undefined with empty bill input', function () {
        billAmtInput.value = '';
        expect(createCurPayment()).toBeUndefined();
    });

    it('createCurPayment() should return payment object', function() {
        let x = { billAmt: billAmtInput.value,
                  tipAmt: tipAmtInput.value,
                  tipPercent: 20};
        
        expect(createCurPayment()).toEqual(x);
    })

    it('appendPaymentTable() should add row with values to paymentTbody', function() {
        let billAmt = billAmtInput.value;
        let tipAmt = tipAmtInput.value;
        let curPayment = { billAmt: billAmt,
            tipAmt: tipAmt,
            tipPercent: calculateTipPercent(billAmt, tipAmt),
            };

        appendPaymentTable(curPayment);

        let x = document.querySelectorAll('#paymentTable tbody tr td');

        expect(x[0].innerHTML).toEqual('$100');
        expect(x[1].innerHTML).toEqual('$20');
        expect(x[2].innerHTML).toEqual('20%');

        x[0].innerHTML = '';
        x[1].innerHTML = '';
        x[2].innerHTML = '';
    });

    it('updateSummary() should pass data to new row in summaryTable', function() {
        let billAmt = billAmtInput.value;
        let tipAmt = tipAmtInput.value;
        let curPayment = { billAmt: billAmt,
            tipAmt: tipAmt,
            tipPercent: calculateTipPercent(billAmt, tipAmt),
            };    
        allPayments['payment1'] = curPayment;

        updateSummary();

        expect(summaryTds[0].innerHTML).toEqual('$100');
        expect(summaryTds[1].innerHTML).toEqual('$20');
        expect(summaryTds[2].innerHTML).toEqual('20%');  
    });

    it('submitPaymentInfo() should add object to allPayments', function() {
        submitPaymentInfo();
        
        expect(Object.keys(allPayments).length).toEqual(1);
    });


    afterEach(function() {
        allPayments = {};
        paymentId = 0;
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
    })


 });
