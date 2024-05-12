# Infrastructure

Setup infrastructure based on your needs. 

## [k6 local]

## [k6 distributed]
- [AWS](./infrastructure/terraform/aws/README.md)
- [Azure](./infrastructure/terraform/azure/README.md) NOT TESTED

# How to
1. Write tests
2. Place tests in the `k6/tests` folder
3. Create configmaps from tests
   ```
   kubectl create configmap k6-tests --from-file=k6/tests/
   ```
4. Start test
   ```
   kubectl apply -f k6/k8s/testrun.yml
   ```
5. Analyze results in grafana k6 dashboard. 
6. Clean up
   ```
   kubectl delete -f k6/k8s/testrun.yml
   ```
7. Destroy infrastructure
   ```
   terraform destroy
   ```

### For using pv
Execute the following commands between 2 and 4 skipping 3. And use testrun-pv.yml instead of testrun.yml

> [Note] 
> Ensure using storage driver that supports mount to multiple nodes.

1. Apply environment-dependent manifests  
   For AWS:
   ```
   kubectl apply -f k6/k8s/aws
   ```
2. Apply init pod
   ```
   kubectl apply -f k6/k8s/init.yml
   ```
3. Ensure that the init pod has completed (it must have `Running` status)
   ```
   kubectl get pods
   ```
4. Copy tests to filesystem
   ```
   kubectl cp k6/tests/. init:/test
   ```
5. Ensure your files are copied
   ```
   kubectl exec init -- ls -la /test
   ```
6. Remove init container.
   ```
   kubectl delete -f k6/k8s/init.yml
   ```