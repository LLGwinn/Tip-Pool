describe("Servers tests (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
      serverNameInput.value = 'Alice';
    });
  
    it('should add a new server to allServers on submitServerInfo()', function () {
      submitServerInfo();
  
      expect(Object.keys(allServers).length).toEqual(1);
      expect(allServers['server' + serverId].serverName).toEqual('Alice');
    });

    it('updateServerTable() should add server name and tips to serverTable', function() {
        let serverName = serverNameInput.value;
        allServers['server1'] = {serverName};

        updateServerTable();

        let x = (document.querySelectorAll('#serverTable tbody tr td'));
        expect(x[0].innerText).toEqual('Alice');
        expect(x[1].innerText).toEqual('$0.00');
        
    });
  
    afterEach(function() {
      //remove test name
      allServers = {};
      serverId = 0;
      serverTbody.innerHTML = '';
      serverNameInput.value = '';
    });
  });
  