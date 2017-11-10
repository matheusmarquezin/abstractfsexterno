# abstractfsexterno

Variações de filesystem nodeJS (S3,local)

## Como Utilizar

Você deve ter seu Bucket no S3, e deve configurar o bucket policy como no exemplo a seguir :

### Observação
as informações do policy serão as suas, você pode configurar via : http://awspolicygen.s3.amazonaws.com/policygen.html

```
{
    "Version": "2012-10-17",
    "Id": "Policy1510955",
    "Statement": [
        {
            "Sid": "Stmt15104814",
            "Effect": "Allow",
            "Principal": {
                "AWS": "arn:aws:iam::847:root"
            },
            "Action": "s3:ListBucket",
            "Resource": "arn:aws:s3:::testearquivos"
        },
        {
            "Sid": "Stmt15415469",
            "Effect": "Allow",
            "Principal": {
                "AWS": "arn:aws:iam::8905:root"
            },
            "Action": "s3:*",
            "Resource": "arn:aws:s3:::testearquivos/*"
        }
    ]
}
```

## Autor

* [**Matheus Marquezin**](https://github.com/matheusmarquezin)

