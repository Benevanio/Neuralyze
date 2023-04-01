const Neuron = synaptic.Neuron,
            Layer = synaptic.Layer,
            Network = synaptic.Network,
            Trainer = synaptic.Trainer,
            Architect = synaptic.Architect;
        function perceptron() {
            const inputLayer = new Layer(4);
            const hiddenLayer = new Layer(3);
            const outputLayer = new Layer(1);
            inputLayer.project(hiddenLayer);
            hiddenLayer.project(outputLayer);
            const myPerceptron = new Network({
                input: inputLayer,
                hidden: [hiddenLayer],
                output: outputLayer
            });
            return myPerceptron;
        }

        function run() {
            const myPerceptron = perceptron();
            const input1 = document.getElementById("input1").value;
            const input2 = document.getElementById("input2").value;
            const input3 = document.getElementById("input3").value;
            const input4 = document.getElementById("input4").value;
            const output = myPerceptron.activate([input1, input2, input3, input4]);
            document.getElementById("output").innerHTML = output;
            
        }
        
        function train() {
            const myPerceptron = perceptron();
            const trainingSet = [
                {
                    input: [0, 0, 0, 0],
                    output: [0]
                },
                {
                    input: [0, 0, 0, 1],
                    output: [0]
                },
                {
                    input: [0, 0, 1, 0],
                    output: [0]
                },
                {
                    input: [0, 0, 1, 1],
                    output: [0]
                },
                {
                    input: [0, 1, 0, 0],
                    output: [0]
                },
                {
                    input: [0, 1, 0, 1],
                    output: [0]
                },
                {
                    input: [0, 1, 1, 0],
                    output: [0]
                },
                {
                    input: [0, 1, 1, 1],
                    output: [0]
                },
                {
                    input: [1, 0, 0, 0],
                    output: [0]
                },
            ];
            const trainer = new Trainer(myPerceptron);
            trainer.train(trainingSet, {
                rate: .1,
                iterations: 20000,
                error: .005,
                shuffle: true,
                log: 1000,
                cost: Trainer.cost.CROSS_ENTROPY
            });
            const input1 = document.getElementById("input1").value;
            const input2 = document.getElementById("input2").value;
            const input3 = document.getElementById("input3").value;
            const input4 = document.getElementById("input4").value;
            const output = myPerceptron.activate([input1, input2, input3, input4]);
            document.getElementById("output").innerHTML = output;
        }
        
                    