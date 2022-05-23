describe('Payment package', () => {
    let instance = undefined;
    beforeEach(() => {
        instance = new PaymentPackage('name', 100);
    });
    it('constructor', () => {
        instance = new PaymentPackage('name', 100);
        assert.equal(instance._name, 'name');
        assert.equal(instance._value, 100);
        assert.equal(instance._VAT, 20);
        assert.equal(instance.active, true);
    });

    /*if (typeof newValue !== 'string') {
        throw new Error('Name must be a non-empty string');
      }
      if (newValue.length === 0) {
        throw new Error('Name must be a non-empty string');
      }
      this._name = newValue;
    }
    */

    it('name', () => {
        instance.name = 'Pesho';
        assert.equal(instance.name, 'Pesho');
        assert.throw(() => { instance.name = '' }, 'Name must be a non-empty string');
        assert.throw(() => { instance.name = 2 }, 'Name must be a non-empty string');

        /*set VAT(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('VAT must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('VAT must be a non-negative number');
        }
        this._VAT = newValue;
    }   */

    })
    it('VAT', () => {
        instance.VAT = 40;
        assert.equal(instance.VAT, 40);
        assert.throw(() => { instance.VAT = -2 }, 'VAT must be a non-negative number');
        assert.throw(() => { instance.VAT = '2' }, 'VAT must be a non-negative number');
    })

    it('active', () => {
        assert.isTrue(instance.active);
        instance.active = false;
        assert.isFalse(instance.active);
        assert.throw(() => { instance.active = 0 }, 'Active status must be a boolean');
    })

    it('value', () => {
        instance.value = 40;
        assert.equal(instance.value, 40);
        assert.throw(() => { instance.value = -2 }, 'Value must be a non-negative number');
        assert.throw(() => { instance.value = '2' }, 'Value must be a non-negative number');
        assert.doesNotThrow(() => { instance.value = 0 }, 'Value must be a non-negative number');
    })

    it('toString', () => {
        function getString(name, value, VAT = 20, active = true) {
            return [
                `Package: ${name}` + (active === false ? ' (inactive)' : ''),
                `- Value (excl. VAT): ${value}`,
                `- Value (VAT ${VAT}%): ${value * (1 + VAT / 100)}`
            ].join('\n');

        }
        assert.equal(instance.toString(), getString('name', 100));
        instance.active = false;
        assert.equal(instance.toString(), getString('name', 100, 20, false));
        instance.VAT = 30;
        assert.equal(instance.toString(), getString('name', 100, 30, false));
        instance.name = "Gosho";
        assert.equal(instance.toString(), getString('Gosho', 100, 30, false));
        instance.value = 2;
        assert.equal(instance.toString(), getString('Gosho', 2, 30, false));
    })

})
